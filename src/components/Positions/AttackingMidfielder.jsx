import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function AttackingMidfielder() {

    return (
        <main>
            <h1 id="attacking-midfielder">Attacking Midfielder</h1>
            <div className="description">
                <p>Attacking midfielders operate between the lines, linking midfield and attack. They specialize in creating chances through vision and technique, with some roles focusing more on goalscoring. Their movement and creativity are crucial for breaking down organized defenses.</p>
            </div>
            <article>
            <h2 id="attacking-midfielder-role" className="role-title">Attacking Midfielder</h2>
                <p className="description">The standard advanced midfield role that connects midfield and attack through intelligent movement and passing.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Drops deeper to link play between midfield and attack, creating chances through vision and technique while maintaining some defensive responsibility.</p>
                    <img src="am_support_heatmap.jpg" alt="Attacking Midfielder Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">More aggressive in positioning, operating closer to the opposition box to create and score goals while offering minimal defensive contribution.</p>
                    <img src="am_attack_heatmap.jpg" alt="Attacking Midfielder Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="advanced-playmaker-role" className="role-title">Advanced Playmaker</h2>
                <p className="description">The team's primary creative hub in advanced positions, specializing in unlocking defenses with incisive passing and vision.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4.5} />
                            </div>
                        </div>
                    </div>                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Drops between lines to receive the ball and dictate play, creating chances with defense-splitting passes while offering minimal defensive work.</p>
                    <img src="ap_support_heatmap.jpg" alt="Advanced Playmaker Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Shoot Less Often</li>
                    </ul>
                    <p className="mentality-description">Operates higher up the pitch as the team's chief creator, taking risks with passes and movement to break down defenses.</p>
                    <img src="ap_attack_heatmap.jpg" alt="Advanced Playmaker Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="trequartista-role" className="role-title">Trequartista</h2>
                <p className="description">A creative free spirit given complete freedom to roam and find space between midfield and attack.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Roam From Position</li>
                        <li>Move Into Channels</li>
                        <li>Ease Off Tackles</li>
                    </ul>
                    <p className="mentality-description">Ignores defensive responsibilities completely, focusing solely on finding space and creating chances through individual brilliance.</p>
                    <img src="treq_attack_heatmap.jpg" alt="Trequartista Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="enganche-role" className="role-title">Enganche</h2>
                <p className="description">A traditional static playmaker who operates as the team's focal point in advanced positions, linking play with precise passing.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={2} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble Less</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Stays centrally positioned to receive the ball and distribute to teammates, offering minimal movement or defensive work.</p>
                    <img src="eng_support_heatmap.jpg" alt="Enganche Support Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="shadow-striker-role" className="role-title">Shadow Striker</h2>
                <p className="description">An aggressive attacking midfielder who makes runs from deep to support the main striker and score goals.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={1.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Dribble More</li>
                        <li>Get Further Forward</li>
                        <li>Move Into Channels</li>
                    </ul>
                    <p className="mentality-description">Constantly looks to break beyond the striker into goalscoring positions, offering almost no defensive contribution.</p>
                    <img src="ss_attack_heatmap.jpg" alt="Shadow Striker Attack Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default AttackingMidfielder;