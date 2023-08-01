export default function Card({selectedData , removeData}){
    const handleButtonRemoveClick = () => {
        removeData(selectedData);
    };
    return (
        <div className='bill' >
            <p className='ten-hoa-don'>{selectedData.name}</p>
            <p> {selectedData.type}</p>
            <p> {selectedData.amount}</p>
            <button onClick={handleButtonRemoveClick}  className='button-Xoa' >Xoa</button>


          </div>
    );
};