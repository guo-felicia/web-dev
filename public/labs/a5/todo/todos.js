//Version 1
// export default [
//     'Buy milk',
//     'Pickup the kids',
//     'Walk the dog'
// ];

//Version 2
// export default [
//     {   title: 'Buy milk',
//         status: 'CANCELED',
//     },
//     {   title: 'Pickup the kids',
//         status: 'IN PROGRESS',
//     },
//     {   title: 'Walk the dog',
//         status: 'DEFERRED',
//     }, ];

//Version 3
export default [
    {   title: 'Buy milk', status: 'CANCELED',
        done: true,
    },
    {   title: 'Pickup the kids', status: 'IN PROGRESS',
        done: false,
    },
    {   title: 'Walk the dog', status: 'DEFERRED',
        done: false,
    },];
