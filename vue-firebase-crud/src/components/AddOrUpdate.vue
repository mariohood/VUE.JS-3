<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import {db} from '../firebase.js'
import {collection , addDoc , doc , updateDoc} from 'firebase/firestore'

const props = defineProps({
    data: Object,
    isNew: Boolean
})


defineComponent({
    name: 'AddOrUpdate'
})

const emits = defineEmits(['close'])

onMounted(() => {
    task.value = {...task.value, ...props.data}
})

const task = ref ({
    nome: '',
    descrição: ''

})


async function addOrUpdate() {
    if (props.isNew) {
        await addDoc(collection(db,'tasks'), task.value).then((res) => {
            emits('close')
        })
    } else {
        await updateDoc(doc(db, 'tasks', props.data.id), task.value).then((res) => {
            emits('close')
        })
    }
}
</script>

<template>
    <Transition name="modal">
    <div class="modal-overlay">
        <div class="modal-wrapper">
            <div class="modal-container">
               <input type="text" placeholder="Nome" v-model="task.nome" />
                <textarea placeholder="Descrição" v-model="task.descrição"></textarea>
                <button @click="emits('close')">Fechar</button>
                <button @click="addOrUpdate()">{{ isNew ? 'Adicionar' : 'Atualizar' }}</button>
                
            </div>
        </div>
    </div>
    </Transition>
</template>


<style>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}

.modal-container {
    width: 300px;
    background-color: #fff;
}

input, textarea {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    overflow: hidden;
}
</style>
```