import axios from "axios";

export default {
    getBookTitle: function(searchedTitle) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchedTitle);
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