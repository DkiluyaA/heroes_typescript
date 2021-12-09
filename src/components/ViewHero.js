import '../styles/modal.css';

export const ViewHero = ({ dataHero }) => {
    const { name, description, url } = dataHero;

    return <div className = 'view-hero'>
        <div className = 'hero-header'>
            <img src = {url} alt = "View hero"
            />
            <div className='hero-info'>
                <h2 className = 'hero-name'>{name}</h2>
                <p className = 'hero-description'>{description}</p>
            </div>
        </div>

    </div>
}
