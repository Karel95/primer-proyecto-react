import PropTypes from 'prop-types'

export const Props = ({name, lastName, edad, cargo = 'developer'}) => {
    console.log(name)
    console.log(lastName)
    console.log(edad)
    console.log(cargo)

    return (
        <>
        <h1>{name}</h1>
        <h2>{lastName}</h2>
        <h3>{edad + 1}</h3>
        <h4>{cargo}</h4>
        </>
    );
}

//forma opcional de tipar
Props.PropTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

//por defecto (opcional)
Props.defaultProps = {
    lastName: "Hernández"
}
