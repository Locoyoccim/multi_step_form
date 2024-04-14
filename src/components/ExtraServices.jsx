function ExtraServices({ id, priceMo, priceYr, type, frequency }) {
  
 
  return (
    <div>
      <div className="aditional">
        <div>
          <p>{type}</p>
        </div>
        <span className="extra_price">
          +${frequency == "mo" ? priceMo : priceYr}/{frequency}
        </span>
      </div>
    </div>
  );
}

export default ExtraServices;
