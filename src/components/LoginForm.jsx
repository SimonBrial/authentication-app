import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <div>
                <div>
                    <img src='../img/devchallenges-light.svg' />
                    <p>devchallenges</p>
                </div>
                <div>
                    <p>Join thousands of learners from around the world</p>
                    <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
                </div>
                <form>
                    <div>
                        <input type='email' />
                        <label>Email</label>
                    </div>
                    <div>
                        <input type='password' />
                        <label>Password</label>
                    </div>
                    <button>Start coding now</button>
                </form>
            </div>
        </div>
    )
}

export { LoginForm }