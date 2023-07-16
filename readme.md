if response just consists of key value we will send it in the root object like - 

{
    "status:"OK",
    "status_code":001,
    "name":"Aditya"
    "age":21,
    "mobile":[
        123412312,
        123141221
    ]
}

if response consists an array then response will come under "items" key

{
    "status:"OK",
    "status_code":001,
    "items":[
        {
            "name":"Aditya"
            "age":21,
            "mobile":[
                123412312,
                123141221
            ]
        },
        {
            "name":"Aditya"
            "age":21,
            "mobile":[
                123412312,
                123141221
            ]
        },
    ]
}