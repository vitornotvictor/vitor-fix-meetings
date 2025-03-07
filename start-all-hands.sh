WORKSPACE_BASE=`realpath .`
echo "start workspace_base: ${WORKSPACE_BASE}"
#--rm --pull=always \
docker run -it \
  -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.io/library/all-hands-custom-arm:0.24 \
  -e LOG_ALL_EVENTS=true \
  -e SANDBOX_USER_ID=$(id -u) \
  -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
  -v $WORKSPACE_BASE:/opt/workspace_base \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/.openhands-state:/.openhands-state \
  -p 3002:3000 \
  --add-host host.docker.internal:host-gateway \
  --name openhands-vitor-fix-meetings \
  docker.all-hands.dev/all-hands-ai/openhands:0.24