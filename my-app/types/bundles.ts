/* A list of bundle objects
GET - http://localhost:3500/api/bundles

    [
        {
            "id": 1,
            "name": "Dark Christmas!",
            "items": [
                5,
                6
            ]
        },
        {
            "id": 2,
            "name": "Triple Bubble!",
            "items": [
                2,
                3,
                4
            ]
        },
        ...
    ]
 */

export interface Bundle {
    id:    number;
    name:  string;
    items: number[]; // bubble IDs
}
