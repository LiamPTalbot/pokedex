import ReactDom from 'react-dom'

export default function Modal(props) {
    const {children, handleClassModal} = props
    
    return ReactDom.createPortal(
        <div className='modal-container'>
            <button onClick={handleClassModal} className='modal-content'/>
            <div className='modal-content'>
                {children}

            </div>
        </div>,
        document.getElementById('portal')
    )
}