"use strict";
$(document).ready(() => {

    $.get("https://www.reddit.com/r/aww/.json").then((response) => {
        // console.log(response);
        const posts = response.data.children
        for (let i = 0; i < 12; i++) {
           console.log(posts[i]);
           $(".main-container").append(`
           <section class="item-container">
           <section class="title-container">
                <a href="${posts[i].data.url}">${posts[i].data.title}</a>
                <p>By: ${posts[i].data.author}</p>
           </section>
           <img src="${posts[i].data.preview.images["0"].source.url}">
           </section>
           `)
        }

        // $(document).on("mouseover", ".item-container", (event) => {
        //     $(".title-container").fadeIn("fast");
        // });
        
        // $(document).on("mouseleave", ".item-container", (event) => {
        //     $(".title-container").fadeOut("fast");
        // });

    
    });




});