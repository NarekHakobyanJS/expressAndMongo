const {MongoClient} = require('mongodb');

// BASEURL + DB
const url = 'mongodb://localhost:27017/person';

// 2-րդ ֆունկցիայի փոփոխականը
// որին կվերագրենք DB միացման արդյունքը

let dbConnection;

// երկու ֆունկցիա դուրս ենք հանում
// և օգտագործում ենք ֆայլում
module.exports = {
    // connectToDb ֆունկցիան որպես արգումենտ ստանումա callBack
    connectToDb : (callBack) => {
        //MongoClient կլասսի connect ֆունկցիան կանչենք որը անսինխռոնա
        // և ստանում որպես արգումենտ url և վերադարձնում է promise
        MongoClient
            .connect(url)
            // բարեհաջող միացման դեպքում then-ին 
            // որպես արգումենտ գալիսա հատուկ օբյեկտ client անունով
            .then((client) => {
                console.log('successful connection');
                // վերևում հայտարաարված dbConnection փոփոխականին
                // վերագրում ենք client օբյեկտի db ֆունկցիաի կանչը
                dbConnection = client.db()
                // վերադարձնում ենք connectToDb ֆունկցիաի
                // ստացած արգումենտ callBack ը
                callBack()
            })
            .catch((err) => console.log(err))
    },
    //getDb ֆունկցիան կվերադարձնի Db միացման արդյունքը
    getDb : () => dbConnection
}
