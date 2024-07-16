/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../../app/experience/page'

describe('Experience page', () => {
  test('renders the experience section', () => {
    render(<Page />)

    // Check if the main heading is rendered
    expect(screen.getByText('Experience')).toBeInTheDocument()

    // Check if company names are rendered
    expect(screen.getByText('Vanguard')).toBeInTheDocument()
    expect(screen.getByText('Rajant Coporation')).toBeInTheDocument()

    // Check if timelines are rendered
    expect(screen.getByText('May 2019 - Aug 2019')).toBeInTheDocument()
    expect(screen.getByText('Jun 2020 - Dec 2020')).toBeInTheDocument()

    // Check if role titles are rendered
    expect(screen.getByText('Tech Lead')).toBeInTheDocument()
    expect(screen.getByText('Associate Software Engineer')).toBeInTheDocument()

    // Check if role blurbs are rendered
    expect(
      screen.getByText(
        'Security and Risk Analysis introduction course taught by Dr. Edward Glantz, PE, CISSP'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Rajant is a defense contractor that produces networking technology that enables secure, real-time communication'
      )
    ).toBeInTheDocument()

    // Check if role bullets are rendered
    expect(
      screen.getByText(
        'Engineered a full stack web application that dynamically updates API documentation with latest releases of a set of micro-services'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Contributed to a full-stack Angular-based College Cost Estimator web app that helps advisors and clients get an estimated cost of college for their children.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Implemented micro frontend architecture using module federation plugin, enhancing modularity and scalability for portfolio and fund comparison tools, managing over 20000+ portfolios.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Conducting interviews on new potential teaching assistant hires.'
      )
    ).toBeInTheDocument()
  })
})
