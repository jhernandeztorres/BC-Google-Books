import axios from "axios";

export default {
    getBookTitle: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + ":keyes&key=AIzaSyATJh5KT_Sm3uL7xyh4vchsDjC9Y7TB5G0");
    },

    getBooks: function(){
        return axios.get("/api/books");
    },

    deleteBooks: function(id){
        return axios.delete("/api/books/" + id);
    },
    saveBooks: function(bookData){
        return axios.post("/api/books", bookData);
    }
};