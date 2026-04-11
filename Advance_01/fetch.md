# What is *fetch( )* ?
fetch is  a api which start a process of fetching a resouce from network.
returning a `promise` which fulfillled once the response is avilable.

# How Fetch API Works


## Key Points:
- `fetch()` returns a Promise
- ***The promise resolves with a Response object (even if HTTP status is 404 or 500)***
- You must check `response.ok` or `response.status` to verify success
- Network errors or failed requests reject the promise
- Use `.json()`, `.text()`, or `.blob()` to parse the response body
- Always handle both success and error cases with `.then().catch()` or `async/await`
## Fetch API Flow Diagram

```mermaid

flowchart TD

    A["User calls fetch(url)"] --> B["Browser creates Request object"]
    B --> C["HTTP Request sent to server"]
    C --> D{"Response received?"}
    D -->|Network Error| E["Promise REJECTED"]
    D -->|Response OK| F["Response object created"]
    F --> G["Check response.ok or status"]
    G -->|Status 200-299| H["Parse response<br/>json()/text()/blob()"]
    G -->|Status 4xx/5xx| I["Response received but<br/>Status indicates error"]
    H --> J["Data parsed"]
    I --> K["Create error handling"]
    J --> L["Promise RESOLVED<br/>with data"]
    K --> M["Application processes<br/>or handles error"]
    L --> M
    E --> M
    M --> N["End"] 
    
    style A fill:#e1f5ff
    style C fill:#fff3e0
    style F fill:#f3e5f5
    style L fill:#c8e6c9
    style E fill:#ffcdd2

    style A color:#000000
    style F color:#000000
    style C color:#000000
     style L color:#000000
    style E color:#f00000

    
```

