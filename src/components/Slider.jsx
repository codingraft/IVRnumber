


const Slider = ({ showSide, setShowSide }) => {
    function handleCloseSlide() {
        setShowSide((prev) => !prev)
    }
    return (
       
<div className={'side_bar ' + (showSide && 'active')}>
    <div className="close" onClick={handleCloseSlide}><i class="fa-solid fa-xmark"></i></div>
    <ul className="mobile_links">
        <li>
            <a href="#about">What is IVR?</a>
        </li>
        <li>
            <a href="#features">IVR Featues</a>
        </li>
        <li>
            <a href="#benifits">IVR Benefits</a>
        </li>
        <li>
            <a href="#plan">Plan And Pricing</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
</div>
  )
}

export default Slider