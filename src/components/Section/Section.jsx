import PropTypes from 'prop-types'


//перевіряємо чи ми передали title як props, якщо ні то не рендиремо порожній тег
const Section = ({ title, children }) => (
  <>
  {title && <h1>{title}</h1>} 
    {children}
    </>
)

Section.propTypes = {
  title: PropTypes.string
}

export default Section