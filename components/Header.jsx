import LoginButton from '../components/LoginButton'

export default function Header(props) {
    return (
        <div className='row bg-primary'>
            <h1 className="col-lg-10 px-3 text-white display-4 text-left">{props.header}</h1>
            <div className='text-center col-lg-2 my-3'>
                <LoginButton />
            </div>
        </div>
    )
}