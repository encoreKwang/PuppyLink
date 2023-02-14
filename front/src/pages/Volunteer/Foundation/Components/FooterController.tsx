import React from 'react'

import { Link } from 'react-router-dom'

import { axAuth } from '@/apis/api/axiosInstance'
import { footers, buttons, labels } from '@/components'


function FooterController(status: status, volunteerNo: number, removeCard: (volunteerNo: number) => void) {

  const regist = () => {
    axAuth({
      method: 'put',
      url: `/volunteer/regist/${volunteerNo}`,
    })
    removeCard(volunteerNo)
  }

  const refuse = () => {
    axAuth({
      method: 'put',
      url: `/volunteer/refuse/${volunteerNo}`,
    })
    removeCard(volunteerNo)
  }

  const confirm = () => {
    axAuth({
      method: 'put',
      url: `/volunteer/confirm/${volunteerNo}`,
    })
    removeCard(volunteerNo)
  }
  const lack = () => {
    axAuth({
      method: 'put',
      url: `/volunteer/lack/${volunteerNo}`,
    })
    removeCard(volunteerNo)
  }
  const complete = () => {
    axAuth({
      method: 'put',
      url: `/volunteer/complete/${volunteerNo}`,
    })
    removeCard(volunteerNo)
  }


  const Controller = {
    'submit': <footers.FooterBtn
      BtnLeft={<buttons.BtnSm BtnValue='거절' onClick={refuse} />}
      BtnRight={<buttons.BtnSm BtnValue='수락' onClick={regist} />}
      onClick={(e) => e.stopPropagation()} />,
    'regist': <footers.FooterBtn
      BtnLeft={<labels.Label LabelValue='접수 완료' />}
      BtnRight={<labels.Label LabelValue='서류 대기' />}
      onClick={(e) => e.stopPropagation()} />,
    'refuse': <footers.FooterBtn
      BtnLeft={<labels.Label LabelValue='접수 완료' />}
      BtnRight={<labels.Label LabelValue='서류 대기' />}
      onClick={(e) => e.stopPropagation()} />,
    'docs': <footers.FooterBtn
      BtnLeft={<buttons.BtnSm BtnValue='서류 확인' />}
      BtnMiddle={<buttons.BtnSm BtnValue='반려' onClick={lack} />}
      BtnRight={<buttons.BtnSm BtnValue='승인' onClick={confirm} />}
      onClick={(e) => e.stopPropagation()} />,
    'lack': <footers.FooterBtn
      BtnLeft={<labels.Label LabelValue='서류 대기' />}
      BtnRight={<buttons.BtnSm BtnValue='서류 확인' />}
      onClick={(e) => e.stopPropagation()} />,
    'confirm': <footers.FooterBtn
      BtnLeft={<labels.Label LabelValue='봉사 진행 중' />}
      BtnMiddle={<buttons.BtnSm BtnValue='봉사 종료' onClick={complete} />}
      BtnRight={<Link state={{ volunteerNo }} to='/gps' ><buttons.BtnSm BtnValue='비행기 경로 확인' /></Link>}
      onClick={(e) => e.stopPropagation()} />,
    'complete': <footers.FooterBtn
      BtnLeft={<labels.Label LabelValue='봉사 완료' />}
      BtnRight={<buttons.BtnSm BtnValue='리뷰 쓰기' />}
      onClick={(e) => e.stopPropagation()} />,
  }
  const footer = Controller[status]

  return footer
}

export default FooterController