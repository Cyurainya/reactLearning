function replaceStyle(content) {

}

module.exports = function(source) {
    const importHead = "import Header from '../../../components/header';\nimport Sidebar from '../../../components/Sidebar';\nimport 'antd/dist/antd.css'\n;"
    const frameTop = "\n<React.Fragment>\n<Header />\n<div style={{display:'flex'}}>\n<Sidebar />\n";
    const frameBottom = "\n</React.Fragment>\n)\n}\n}\n;\nrender(<App/>, document.getElementById('app'));";
    this.cacheable(false);
    //接着就是重新拼接模板
    const importHeadSource = importHead + source;
    const addBeginIndex = importHeadSource.indexOf('<div className="main">');
    const addBeginSource = importHeadSource.slice(0,addBeginIndex) + frameTop + importHeadSource.slice(addBeginIndex)
    const addEndDiv = addBeginSource.lastIndexOf('</div>');
    const newSource = addBeginSource.slice(0, addEndDiv + 6) + frameBottom;
    console.log(newSource)

    console.log('----------------------------------------')
    this.callback(null, newSource);

    // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中 
    return;
};