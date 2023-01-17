const CancelledLayer = ()=>{
    return(
        <div style={{ position: 'absolute', zIndex: '1',
            height: '100%',
            backgroundColor: 'red',
            width: '20%',
            textAlign:'center'}}>
            <img src="svgs/warning.svg" style={{width:'100%'}}></img>
            <div>Stop is cancelled</div>
        </div>
    )
}
export default CancelledLayer;