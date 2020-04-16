import Loadable from "react-loadable"

const loadingComponent = () => {
    return null
}

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,   //需要懒加载的组件
        loading
    })         
}