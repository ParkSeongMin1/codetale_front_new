import { Fragment } from "react";
import Navbar from "../component/Navbar";
import "./Workbook.css";
import { useLocation,  } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Content(props) {

    // Assuming you have a state variable named "data"
    const [data, setData] = useState([]);

    // Inside the component or useEffect
    /*
    useEffect(() => {
        fetch(`url`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Token ${localStorage.getItem('token')}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log(error)// Handle any errors
            });
    }, []);

    */

    const location = useLocation();
    const num = location.state.num;
    console.log(num);

    /*
        const string = data.map((item) => { item.id == num ? item.content : "" });
    */


    var lecture = <h1>애국가의 가사는 1900년대 초에 쓰여졌다. 작사자는 크게 윤치호라는 설과 안창호라는 설 두 가지가 있으며, 국사편찬위원회의 공식적인 입장으로는 미상이다. 작사자 윤치호 설은 윤치호가 애국가의 가사를 1907년에 써서 후에 그 자신의 이름으로 출판했다는 것이다. 한편 안창호가 썼다는 주장은 안창호가 애국가를 보급하는 데에 앞장섰다는 데에 중점을 두고 있다. 1908년에 출판된 가사집 《찬미가》에 수록된 것을 비롯한 많은 일제 강점기의 애국가 출판물은 윤치호를 작사자로 돌리고 있는 등 윤치호 설에는 증거가 많은 반면[4] 안창호 설에는 실증적인 자료가 부족하다. 윤치호의 사촌동생 윤치영(尹致瑛)은 윤치호가 대한민국의 애국가 가사의 일부를 썼다고 주장했다.[5] 윤치영에 의하면 애국가 가사의 앞부분은 최병헌 목사가 짓고, 후렴구는 윤치호가 지었다는 것이다. 최병헌은 윤치호가 다니던 정동감리교회의 목사였다.[5] 윤치호와 최병헌이 함께 지었다는 애국가 사본이 2002년 한남대학교 교수 박정규에 의해 발견되기도 했다. 이는 윤치호의 ‘무궁화 노래’(1896)와 김인식의 ‘코리아’(1910)가 합쳐진 형태로, 후렴이 현재의 애국가와 같다.[6] 또한 애국가의 원본은 그가 지었으나, 후에 대한민국 임시정부에서 일부 개사했다고도 한다. 그밖에 '성자신손 오백년은, 우리 황실이요'로 시작되는 협성회 무궁화가 역시 윤치호가 작사를 하였다는 설이 있다.[7] 윤치호가 지은 노래 중 안창호가 가사의 성자신손 오백년은 우리 황실이요를 문제삼아 가사를 바꾸라고 요청하자 동해물과 백두산이 마르고 닳도록으로 고쳤다. 그러나 1919년 대한민국 임시정부에 참여한 안창호는 윤치호가 지었다가 본인 스스로 수정한 부분 중에서도 우리 대한 만세를 우리 나라 만세로, 이기상과 이맘으로 임금을 섬기며를 이기상과 이맘으로 충성을 다하며로 안창호가 다시 고쳤다는 것이다. 독립운동가 겸 정치인 주요한과, 독립운동가 안태국의 사위 홍재형 등은 그가 지은 협성회 무궁화가를 안창호의 요청으로 개사한 것이 애국가의 기원이 되었다고 진술했다. 이는 한말 독립운동가인 안태국(안창호, 양기탁 선생과 신민회를 조직, 105인 사건의 주모자로 피검)의 사위인 홍재형이 안태국의 말을 회고하는  안도산전서(安島山全書) 의 내용에서 살펴 볼 수 있다 </h1>

    return (
        <Fragment className="content_background">
            <Navbar />

            <button className="back_button" ><img src="../images/backspace.jpg" height="50" /></button>
            <div className="support-grid"></div>

            <div className="band">
                <div className="title">
                    <a className="card_workbook">
                        <h1 id="title_workbook" align="center" style={{ marinTop: "50px" }}>Workbook</h1>
                    </a>
                </div>
                <div className="content_workbook">
                    {lecture}

                </div>
            </div>

        </Fragment >

    )
}

export default Content;