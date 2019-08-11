# Inherit Postgres Alpine
FROM postgres:11.5-alpine

ENV ALLOW_IP_RANGE="0.0.0.0/0"

# Database controller initiator
ARG CONTROLLER_CMD="(npm install; /opt/bloo-ssot/scripts/wait 0.0.0.0:5432 -- npm run migrations --prefix /opt/bloo-ssot/) &"

# Install Node
RUN apk add --update nodejs npm

# Copy database controller
RUN mkdir /opt/bloo-ssot
COPY ./ /opt/bloo-ssot
WORKDIR /opt/bloo-ssot

# Make wait script executable
RUN chmod +x /opt/bloo-ssot/scripts/wait

# Install dependincies & run
RUN echo -e "#!/usr/bin/env bash\nif [ ! -f \"/etc/.node_run_one\" ]; then touch /etc/.node_run_one; ${CONTROLLER_CMD} fi;\n$(cat /usr/local/bin/docker-entrypoint.sh)" > /usr/local/bin/docker-entrypoint.sh
