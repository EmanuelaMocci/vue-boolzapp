var app = new Vue({
    el: '#root',
    data: {
        utenteImg: 'img/avatar_io.jpg',
        utenteChat: 'img/avatar_1.jpg',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        currentIndex: 0,
        nuovo: "",
        currentDate: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: "ok",
        searchText: ""
    },
    methods: {
        newText: function(){
            if(this.nuovo != ""){
                this.contacts[this.currentIndex].messages.push({
                    date: this.currentDate,
                    message: (this.nuovo),
                    status: 'sent',
                });
                setTimeout(()=>{ 
                    this.contacts[this.currentIndex].messages.push({
                        message: ("ok"),
                        date: this.currentDate,
                        status: 'received',
                    }); 
                }, 1000);
            } this.nuovo = "";
        },
        search: function(){
            for (let i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.searchText.toLowerCase())){
                    this.contacts[i].visible = true;
                } else {
                    this.contacts[i].visible = false;
               }
            }  
        } 
    } 
});


