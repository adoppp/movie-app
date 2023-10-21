import { Bars } from "react-loader-spinner"

const Loader = () => {
    return (
        <Bars
            height="80"
            width="80"
            color="#AF0404"
            ariaLabel="bars-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto'
            }}
            wrapperClass=""
            visible={true}
        />
    )
}

export { Loader };