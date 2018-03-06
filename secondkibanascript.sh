curl localhost:5601/es_admin/.kibana/index-pattern/errorlogs/_create\ 
    -H "Content-Type: application/json"\
    -H "Accept: application/json, text/plain, */*"\
    -H "kbn-xsrf: errorlogs"\
    --data-binary '{"title":"errorlogs","timeFieldName":"@timestamp"}'  -w "\n"
