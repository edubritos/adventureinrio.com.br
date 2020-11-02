import Carousel from 'react-bootstrap/Carousel'

const Slider = () => (
    <div className="slider d-flex">
        <Carousel interval={4000}>
            <Carousel.Item >
                <img
                    src="../static/slider/pg5.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="../static/gavea/gavea7.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="../static/slider/pda.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    </div>
)

export default Slider
