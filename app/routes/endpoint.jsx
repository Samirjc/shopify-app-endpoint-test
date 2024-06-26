import axios from "axios";

export const action = async ( {request} ) => {

    const headers = { 
        'X-Shopify-Access-Token': 'shpua_dffa4afdd73ba97b8f46a53145c0686b' //pegar token do header do request
    };

    request.json().then(payload => {
        const body = {
            product: {
                id: 9219607953681,
                variants: [
                    {
                        id: payload.id,
                        price: payload.price
                    }
                ]
            }
        }

        axios.put("https://teste-neki-it.myshopify.com/admin/api/2024-04/products/9219607953681.json", body, {headers}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        });
    });

    return new Response({}, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    });
};