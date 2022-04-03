<template>
    <div class="notes">
        <h1>You can see all of your notes here..</h1>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link style="text-decoration: none; color: inherit;" to="/noteview">View note</router-link>
            </div>
        </div>

        <router-link style="text-decoration: none; color: inherit;" to="/noteadd">Add new Note</router-link>
    </div>
</template>