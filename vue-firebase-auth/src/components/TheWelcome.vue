<script setup>
import {auth} from '@/firebase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {ref} from 'vue'

const data = ref({
    email: '',
    password: ''
})

const mode = ref('login')

function toggleMode(val) {
    mode.value = val
}

async function login(email, password){
    
}

async function register(email, password){

    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

function submit() {
let email = data.value.email
let password = data.value.password
    if(mode.value === 'login') {
        login(email, password)
    } else {
        register(email, password)
    }   
}
</script>

<template>
    <div>
        <form @submit.prevent="submit">
        <div><input type="email" v-model="data.email" placeholder="Email" /></div>
        <div><input type="password" v-model="data.password" placeholder="Password" /></div>
            <button type="submit">{{ mode === 'login' ? 'Login' : 'Register'}}</button>
            <div @click="toggleMode( mode === 'login' ? 'register' : 'login')">{{ mode === 'login' ? 'Not a user? Register' : 'Already a user? Login' }}</div>
        </form>
    </div>
</template>