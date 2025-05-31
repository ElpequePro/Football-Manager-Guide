import React from 'react';
import { useParams } from 'react-router-dom';
import './Positions.css';
import StarRating from '../StarRating';
import { LuShield, LuSwords, LuFlame } from 'react-icons/lu';
import positionsData from '../../positions_data.json';

function generateId(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
}

function Positions() {
    const { position } = useParams();

    // Normalize position param to match JSON position names
    const normalizedPosition = position
        ? position.toLowerCase().replace(/-/g, '')
        : '';

    // Find matching position data from JSON
    const data = positionsData.find(
        (item) => generateId(item.position).replace(/-/g, '') === normalizedPosition
    );

    if (!data) {
        return (
            <main>
                <h1>Position Not Found</h1>
                <p>The position "{position}" does not exist in the data.</p>
            </main>
        );
    }

    return (
        <main>
            <h1 id={data.position.toLowerCase()}>{data.position}</h1>
            <div className="description">
                <p>{data.description}</p>
            </div>
            {data.roles.map((role) => (
                <article key={role.role}>
                    <h2
                        id={`${generateId(role.role)}-role`}
                        className="role-title"
                    >
                        {role.role}
                    </h2>
                    <p className="description">{role.description}</p>
                    {role.mentalities.map((mentality) => (
                        <section key={mentality.mentality}>
                            <div className="mentality-header">
                                <span className={`mentality-title ${mentality.mentality.toLowerCase()}`}>
                                    {mentality.mentality}
                                </span>
                                <div className="rating-container">
                                    <div className="rating rounded-full">
                                        <LuShield color="var(--blue)" />
                                        <StarRating rating={mentality.defense} />
                                    </div>
                                    <div className="rating rounded-full">
                                        <LuSwords color="var(--red)" />
                                        <StarRating rating={mentality.attack} />
                                    </div>
                                </div>
                            </div>
                            <ul className="mentality-instructions">
                                {mentality.instructions ? (
                                    mentality.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))
                                ) : (
                                    <li className="no-instructions">No Specific Instructions</li>
                                )}
                            </ul>
                            <p className="mentality-description">{mentality.description}</p>
                            <img
                                src={mentality.heatmap}
                                alt={`${role.role} ${mentality.mentality} Heatmap`}
                                className="heatmap"
                            />
                        </section>
                    ))}
                </article>
            ))}
        </main>
    );
}

export default Positions;
