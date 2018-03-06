url="http://localhost:5601"
index_pattern="log*"
time_field="@timestamp"
# Create index pattern and get the created id
# curl -f to fail on error
id=$(curl -f -XPOST -H "Content-Type: application/json" -H "kbn-xsrf: anything" \
  "$url/api/saved_objects/index-pattern" \
  -d"{\"attributes\":{\"title\":\"$index_pattern\",\"timeFieldName\":\"$time_field\"}}" \
  )

#set as default index
curl -X POST -H "Content-Type: application/json" -H "kbn-xsrf: true" -d '{"value":"log*"}' \
 http://elastic:changeme@localhost:5601/api/kibana/settings/defaultIndex
