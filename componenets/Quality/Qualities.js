import React, { useEffect, useState } from 'react'
import QualitiesFinal from "./QualitiesFinal"
import QualitiesNotDefined from './QualitiesNotDefined'
import cookies from 'js-cookie'
import qualitiesList from '../../qualitiesList'

function Qualities(props) {
    const [submitted, setSubmitted] = useState(0);
    const qualities = qualitiesList.map(quality => {
        return <QualitiesNotDefined
            setSubmitted={setSubmitted}
            description={quality.description}
            key={quality.description}
        />
    })
    useEffect(() => {
        props.setSubmitted(submitted)
    }, [submitted])
    return (
        <div>{qualities}</div>
    )
}

export default Qualities;