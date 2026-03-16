/* A list of bubble product objects
GET - http://localhost:3500/api/bubbles 

    [
        {
            "id": 1,
            "name": "Plain bubbles",
            "description": "These are the plain bubbles! They are as plain as they get!",
            "price": 499,
            "image": "https://i.imgur.com/ZiNsJOp.png"
        },
        {
            "id": 2,
            "name": "Wild bubbles",
            "description": "These are the wild bubbles! They form various shapes as found in the wild! Look out! It's a bubble bear!",
            "price": 799,
            "image": "https://i.imgur.com/w9Usvcd.png"
        },
        ...
    ]
 */

export interface Bubbles {
    bubbles: Bubble[];
}


/* A single bubble product object
GET - http://localhost:3500/api/bubbles/id

    {
        "id": 1,
        "name": "Plain bubbles",
        "description": "These are the plain bubbles! They are as plain as they get!",
        "price": 499,
        "image": "https://i.imgur.com/ZiNsJOp.png"
    }
 */

export interface Bubble {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    image:       string;
}