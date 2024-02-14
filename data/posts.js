import {USERS} from './users'

export const POSTS = [
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_BzDMSkgilsUTwfiXCEU8zRI9zi2c7TQWfIEg1iGKSXfXuxEKRncgjTvvAkwN5GM0jE&usqp=CAU',
    user: USERS[1].user,
    likes: 7878,
    caption: 'Train Ride to Hogwarts. ',
    profile_picture: USERS[0].image,
    comments:[
         {
            user: 'javad',
            comment: 'awesome'
        }, 
        {
            user: 'karim',
            comment: "jonnam"
        },
       
       
      ],
    },
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_BzDMSkgilsUTwfiXCEU8zRI9zi2c7TQWfIEg1iGKSXfXuxEKRncgjTvvAkwN5GM0jE&usqp=CAU',
    user: USERS[2].user,
    likes: 7878,
    caption: 'Train Ride to Hogwarts. ',
    profile_picture: USERS[0].image,
    comments:[
        {
            user: 'javad',
            comment: 'awesome'
        },
        {
            user: 'karim',
            comment: "jonnam"
        },
      ],
    },
]
