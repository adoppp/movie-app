import { Report } from "notiflix"

const Error = ({message}) => {
    return <div>{Report.failure(
        'Error',
        `${message}`,
        'Ok'
        )}
    </div>
}

export { Error }