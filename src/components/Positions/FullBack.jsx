import './Positions.css';
import StarRating from '../StarRating';
import { LuSwords, LuShield } from 'react-icons/lu';

function FullBack() {

    return (
        <main>
            <h1 id="full-back">Full-Back</h1>
            <div className="description">
                <p>Full-backs provide width in both defensive and attacking phases, requiring stamina to cover the entire flank. They balance defensive responsibilities with supporting attacks through overlapping runs or inverted positioning.</p>
            </div>
            <article>
            <h2 id="full-back-role" className="role-title">Full-Back</h2>
                <p className="description">A traditional full-back who balances defensive duties with supporting attacks. Provides width and can deliver crosses while maintaining defensive solidity.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={2} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take Fewer Risks</li>
                        <li>Cross From Deep</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Focuses primarily on defensive duties, staying deep to protect the flank and mark opposition wingers. Rarely ventures forward.</p>
                    <img src="fb_defend_heatmap.jpg" alt="Full-Back Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Balances defensive and attacking responsibilities, making overlapping runs when appropriate while maintaining defensive shape.</p>
                    <img src="fb_support_heatmap.jpg" alt="Full-Back Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross More Often</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Frequently joins attacks, providing width and delivering crosses. Takes more risks with positioning but still maintains defensive awareness.</p>
                    <img src="fb_attack_heatmap.jpg" alt="Full-Back Attack Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Automatic</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li className='no-instructions'>No Specific Instructions</li>
                    </ul>
                    <p className="mentality-description">Adjusts mentality based on team strategy - defends when team is defending, supports in balanced approaches, and attacks when team is pushing forward.</p>
                    <img src="fb_auto_heatmap.jpg" alt="Full-Back Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="wing-back-role" className="role-title">Wing-Back</h2>
                <p className="description">A more attacking full-back role, often used in systems with three center-backs. Requires exceptional stamina to cover the entire flank with both defensive and offensive responsibilities.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take Fewer Risks</li>
                        <li>Cross From Deep</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">While still more attacking than a standard full-back, focuses more on defensive duties and maintaining width in deeper positions.</p>
                    <img src="wb_defend_heatmap.jpg" alt="Wing-Back Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Frequently pushes forward to provide width and crossing opportunities while still tracking back to defend.</p>
                    <img src="wb_support_heatmap.jpg" alt="Wing-Back Support Heatmap" className="heatmap" />
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
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross From Byline</li>
                        <li>Get Further Forward</li>
                    </ul>
                    <p className="mentality-description">Highly attacking, constantly pushing forward to provide width and crosses. Defensive duties are secondary to attacking contributions.</p>
                    <img src="wb_attack_heatmap.jpg" alt="Wing-Back Attack Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Automatic</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
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
                    <p className="mentality-description">Adjusts mentality based on team strategy - more defensive when needed, more attacking when appropriate.</p>
                    <img src="wb_auto_heatmap.jpg" alt="Wing-Back Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="no-nonsense-full-back-role" className="role-title">No-Nonsense Full-Back</h2>
                <p className="description">A purely defensive full-back who focuses on simple, effective defending without venturing forward. Clears danger immediately rather than playing out from the back.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={1} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>More Direct Passes</li>
                        <li>Take Fewer Risks</li>
                        <li>Cross Less Often</li>
                        <li>Dribble Less</li>
                        <li>Shoot Less Often</li>
                        <li>Hold Position</li>
                    </ul>
                    <p className="mentality-description">Focuses exclusively on defensive duties, clearing the ball immediately when under pressure. Rarely crosses the halfway line.</p>
                    <img src="nnfb_defend_heatmap.jpg" alt="No-Nonsense Full-Back Defend Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="complete-wing-back-role" className="role-title">Complete Wing-Back</h2>
                <p className="description">The most attacking wing-back role, expected to contribute significantly to both defensive and attacking phases. Requires exceptional stamina and technical ability.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Get Further Forward</li>
                        <li>Roam From Position</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Constantly involved in both defensive and attacking phases, providing width and crossing opportunities while still maintaining defensive responsibilities.</p>
                    <img src="cwb_support_heatmap.jpg" alt="Complete Wing-Back Support Heatmap" className="heatmap" />
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
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross From Byline</li>
                        <li>Get Further Forward</li>
                        <li>Roam From Position</li>
                        <li>Stay Wider</li>
                    </ul>
                    <p className="mentality-description">Highly attacking, almost operating as a winger at times. Provides constant width and crossing opportunities while still expected to track back.</p>
                    <img src="cwb_attack_heatmap.jpg" alt="Complete Wing-Back Attack Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="inverted-wing-back-role" className="role-title">Inverted Wing-Back</h2>
                <p className="description">A wing-back who cuts inside into central midfield areas rather than staying wide, creating numerical superiority in midfield while still providing defensive cover.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross Less Often</li>
                        <li>Dribble Less</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Focuses more on defensive duties, tucking inside to provide cover in midfield areas while maintaining defensive shape.</p>
                    <img src="iwb_defend_heatmap.jpg" alt="Inverted Wing-Back Defend Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Support</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross Less Often</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Balances defensive and attacking duties, moving inside to support midfield play while still providing defensive cover.</p>
                    <img src="iwb_support_heatmap.jpg" alt="Inverted Wing-Back Support Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title attack">Attack</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Take More Risks</li>
                        <li>Cross Less Often</li>
                        <li>Dribble More</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Frequently moves inside to support attacks, almost operating as an additional central midfielder in possession.</p>
                    <img src="iwb_attack_heatmap.jpg" alt="Inverted Wing-Back Attack Heatmap" className="heatmap" />
                </section>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title support">Automatic</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={3.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={3.5} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Cross Less Often</li>
                        <li>Cut Inside With Ball</li>
                        <li>Roam From Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Adjusts mentality based on team strategy, moving inside to support play appropriately based on match situation.</p>
                    <img src="iwb_auto_heatmap.jpg" alt="Inverted Wing-Back Automatic Heatmap" className="heatmap" />
                </section>
            </article>
            <article>
            <h2 id="inverted-full-back-role" className="role-title">Inverted Full-Back</h2>
                <p className="description">A more defensive version of the inverted wing-back, primarily tucking inside to provide defensive cover in midfield areas while rarely venturing forward.</p>
                <section>
                    <div className="mentality-header">
                        <span className="mentality-title defend">Defend</span>
                        <div className="rating-container">
                            <div className="rating rounded-full">
                                <LuShield color='var(--blue)' />
                                <StarRating rating={4.5} />
                            </div>
                            <div className="rating rounded-full">
                                <LuSwords color='var(--red)' />
                                <StarRating rating={2} />
                            </div>
                        </div>
                    </div>
                    <ul className='mentality-instructions'>
                        <li>Hold Position</li>
                        <li>Sit Narrower</li>
                    </ul>
                    <p className="mentality-description">Focuses on defensive duties, tucking inside to provide numerical superiority in defensive midfield areas while maintaining shape.</p>
                    <img src="ifb_defend_heatmap.jpg" alt="Inverted Full-Back Defend Heatmap" className="heatmap" />
                </section>
            </article>
        </main>
    );
}

export default FullBack;