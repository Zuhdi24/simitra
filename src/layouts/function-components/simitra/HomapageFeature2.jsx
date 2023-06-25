import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature2 = ({ feature_list2 }) => {
    return (
        <div className="container">
            <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4 left-50%">
                {
                    feature_list2.map((item, i) => {
                        const FeatherIcon = Icon[humanize(item.icon)];
                        const warnatext = { color: "#7D4F50", textAlign: 'center' };

                        // Menambahkan kondisi untuk membuat item grid ke-5, ke-6, dan ke-7 menjadi horizontal
                        // const gridColumn = i >= 4 && i <= 6 ? 'span 1' : 'span 1';

                        // Menambahkan kondisi untuk mengatur item grid ke-5, ke-6, dan ke-7 menjadi berada di tengah
                        // const justifyCenter = i >= 4 && i <= 6 ? 'justify-self-center ' : '';

                        return (
                            <div
                                key={i}
                                className={`flex flex-col rounded-lg bg-white p-5 shadow-lg`}
                                style={{ paddingTop: '50px' }}
                            >
                                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                                    <div style={{ position: 'absolute', top: '-60px', left: '90%', transform: 'translateX(-50%)', width: '50px', height: '50px', border: '0.5px solid black', backgroundColor: 'white', borderRadius: '50%', zIndex: '1', opacity: '1' }}>
                                        <p style={{ textAlign: 'center', fontSize: '20px', color: '#7D4F50', opacity: '1', fontWeight: 'bold' }}>
                                            {item.angka}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ position: 'relative', top: '-60px' }}>
                                    <h3 className="h4 text-xl lg:text-2xl" style={warnatext}>
                                        {item.title}
                                    </h3>
                                    <p style={warnatext}>{item.content}</p>
                                </div>
                                <span className="icon mt-4">
                                    <FeatherIcon />
                                </span>
                            </div>
                        );
                    })
                }
            </div >
        </div>
    );
};

export default HomapageFeature2;