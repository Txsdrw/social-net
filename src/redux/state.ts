import {v4 as uuid} from 'uuid';

export const state = {
    profilePage: {

        posts:
            [
                {id: uuid(), message: 'Hello, how are you?', likesCount: 12},
                {id: uuid(), message: 'My name is Anton', likesCount: 5},
            ]
    },
   messagesPage: {
       users:
           [
               {id: uuid(), name: 'Bob'},
               {id: uuid(), name: 'Julia'},
               {id: uuid(), name: 'Anton'},
               {id: uuid(), name: 'John'},
               {id: uuid(), name: 'Elena'},
           ],
       messages:
           [
               {id: uuid(), message: 'Hello'},
               {id: uuid(), message: 'Hi how are you'},
               {id: uuid(), message: 'Im fine thank you'},
               {id: uuid(), message: 'Good to hear'},
               {id: uuid(), message: 'Buy buy'},
           ],

   }


}