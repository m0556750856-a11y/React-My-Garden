import React from 'react';

function Flower(props) {
  // שליפת הערכים מתוך ה-props (או שימוש ישיר ב-props.flowerName)
  const { flowerName="ורד", petalColor="#755077", centerColor="#ffd700"  } = props;
//   const flowerName = "ורד";
//   const petalColor = "#e67fd8"; // צבע עלי כותרת (כפי שהופיע אצלך)
//   const centerColor = "#ffd700"; // צבע מרכז הפרח

  // יצירת מערך של עלי כותרת כדי למקם אותם במעגל סביב המרכז
  const petals = Array.from({ length: 10 });

  return (
    <div onClick={()=> alert(`אני פרח מסוג ${flowerName}`)} style={{ textAlign: 'center', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      {/* אזור הפרח */}
      <div 
        style={{
          position: 'relative',
          width: '150px',
          height: '150px',
          margin: '0 auto 20px auto'
        }}
      >
        {/* עלי הכותרת המקושתים */}
        {petals.map((_, index) => {
          const angle = index * 36; // חלוקת 360 מעלות ל-10 עלי כותרת
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '50px',
                left: '60px',
                width: '30px',
                height: '60px',
                backgroundColor: petalColor,
                borderRadius: '50%',
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'center top',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
          );
        })}

        {/* מרכז הפרח העגול */}
        <div 
          style={{
            position: 'absolute',
            top: '43px',
            left: '62px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: centerColor,
            zIndex: 10,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
          }}
        />
      </div>

     
      <h3 style={{ color: centerColor, fontSize: '24px', margin: '10px 0', textShadow: '1px 1px 1px #333' }}>
        {flowerName}
      </h3>
     <p style={{ color: centerColor, fontSize: '16px', direction: 'rtl' }}>
        צבע עלי כותרת: ורוד
      </p>
      <p style={{ color: centerColor, fontSize: '16px', direction: 'rtl' }}>
        צבע העלה המרכזי: צהוב
        </p>
    </div>
  );
}

export default Flower;