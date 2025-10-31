
create-network:
	docker network create --driver overlay --scope swarm --attachable resume || echo "network already exists. skipping."

create-kafka-connectors:
	./kafka/kafka_connect/create_connectors.sh d

create-secrets:
	printf "postgres" | docker secret create postgres_password -
	printf "grafana" | docker secret create grafana_password -
	printf "minio" | docker secret create minio_password -
	printf "elasticsearch" | docker secret create elasticsearch_password -
	cat ./docker/configs/certs/domain.key | docker secret create registry_ssl_key -
	cat ./docker/configs/certs/domain.crt | docker secret create registry_ssl_crt -
	printf "influxdb" | docker secret create influxdb_password -
	printf "FMZ6bCX2QekeXOGPfctfRATHAFzkWaFBx-rbq1nhTyYvsdJ-DrClTI_1l2Vc_bjqJwmGYYO3dWdc5lfIxnFQYA==" | docker secret create influxdb_admin_token -

##########################

deploy-docker:
	./deploy_stack.sh docker

deploy-proxy:
	./deploy_stack.sh proxy

deploy-webapp:
	./build_dockerfile.sh webapp frontend src/frontend
	./deploy_stack.sh webapp . ./webapp/src/frontend/.env



deploy-clickhouse:
	./deploy_stack.sh clickhouse

deploy-grafana:
	docker build -t localregistry.com/grafana/grafana-prod:11.5.0 ./grafana/
	docker push localregistry.com/grafana/grafana-prod:11.5.0
	./deploy_stack.sh grafana

deploy-metabase:
	docker build -t localregistry.com/metabase/metabase-prod:v0.53.2.2 ./metabase/
	docker push localregistry.com/metabase/metabase-prod:v0.53.2.2
	./deploy_stack.sh metabase

deploy-postgres:
	./deploy_stack.sh postgres

deploy-prometheus:
	./deploy_stack.sh prometheus

deploy-superset:
	docker build -t localregistry.com/apache/superset-prod:4.1.1 ./superset/
	docker push localregistry.com/apache/superset-prod:4.1.1
	./deploy_stack.sh superset

deploy-kafka:
	docker build -t localregistry.com/confluentinc/cp-kafka-prod:7.8.0 ./kafka/
	docker build -t localregistry.com/confluentinc/cp-kafka-connect-prod:7.8.0 ./kafka/kafka_connect/
	docker push localregistry.com/confluentinc/cp-kafka-prod:7.8.0
	docker push localregistry.com/confluentinc/cp-kafka-connect-prod:7.8.0
	./deploy_stack.sh kafka

deploy-influxdb:
	./deploy_stack.sh influxdb

deploy-cratedb:
	docker build -t localregistry.com/crate-prod:5.10.1 ./cratedb/
	docker push localregistry.com/crate-prod:5.10.1
	./deploy_stack.sh cratedb

deploy-spark:
	docker build -t localregistry.com/bitnami/spark-prod:3.5.0 ./spark/
	docker push localregistry.com/bitnami/spark-prod:3.5.0
	docker build -t localregistry.com/jupyterhub/jupyterhub-prod:5.2.1 ./spark/jupyterhub/
	docker push localregistry.com/jupyterhub/jupyterhub-prod:5.2.1
	docker build -t localregistry.com/jupyter/pyspark-notebook:x86_64-spark-3.5.0 ./spark/jupyterhub/notebook/pyspark/
	docker push localregistry.com/jupyter/pyspark-notebook:x86_64-spark-3.5.0
	./deploy_stack.sh spark

deploy-ldap:
	./deploy_stack.sh ldap

deploy-mongo:
	./deploy_stack.sh mongo

deploy-mssql:
	./deploy_stack.sh mssql

deploy-elk:
	./deploy_stack.sh elk

deploy-api-dotnet:
	docker stack rm platform-WebApi
	docker build -t localregistry.com/dotnet/webapi:1.0.0 ./api/dotnet/WebApi/
	./deploy_stack.sh WebApi ./api/dotnet

deploy-rabbitmq:
	./deploy_stack.sh rabbitmq