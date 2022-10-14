export default {
    methods: {
        show(item){
            alert(item)
        }
    },
    data() {
        return {
            midi:'杜甫'
        }
    },
    mounted() {
        console.log('混合生命周期钩子');
    },
}