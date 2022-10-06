import React from 'react'

function Switcher() {
  return (
    <>
            <div id="switcher" className="">
    <div className="content-switcher">
        <h4>STYLE SWITCHER</h4>
        <ul>
            <li>
                <a href="#" onclick="setActiveStyleSheet('purple');" title="purple" className="color"><img src="img/styleswitcher/purple.png" alt="purple"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('red');" title="red" className="color"><img src="img/styleswitcher/red.png" alt="red"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('blueviolet');" title="blueviolet" className="color"><img src="img/styleswitcher/blueviolet.png" alt="blueviolet"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('blue');" title="blue" className="color"><img src="img/styleswitcher/blue.png" alt="blue"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('goldenrod');" title="goldenrod" className="color"><img src="img/styleswitcher/goldenrod.png" alt="goldenrod"/></a>
            </li>

            <li>
                <a href="#" onclick="setActiveStyleSheet('magenta');" title="magenta" className="color">
                    <img src="img/styleswitcher/magenta.png" alt="magenta"/>
                </a>
            </li>

            <li>
                <a href="#" onclick="setActiveStyleSheet('yellowgreen');" title="yellowgreen" className="color"><img src="img/styleswitcher/yellowgreen.png" alt="yellowgreen"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('orange');" title="orange" className="color"><img src="img/styleswitcher/orange.png" alt="orange"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('green');" title="green" className="color"><img src="img/styleswitcher/green.png" alt="green"/></a>
            </li>
            <li>
                <a href="#" onclick="setActiveStyleSheet('yellow');" title="yellow" className="color"><img src="img/styleswitcher/yellow.png" alt="yellow"/></a>
            </li>
        </ul>
        <div id="hideSwitcher">&times;</div>
    </div>
</div>

<div id="showSwitcher" className="styleSecondColor"><i className="fa fa-cog fa-spin"/></div>
    </>

  )
}

export default Switcher
