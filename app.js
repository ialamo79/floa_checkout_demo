{
  "scriptFile": "index.js",
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "post",
        "options"
      ],
      "route": "start-payment"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}