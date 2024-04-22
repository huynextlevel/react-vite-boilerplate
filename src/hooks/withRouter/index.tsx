import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>
  params: Record<string, string>
  navigate: ReturnType<typeof useNavigate>
}

type IComponentWithRouterProp = {
  [x: string]: any
}

export function withRouter(Component: any): any {
  function ComponentWithRouterProp(
    props: IComponentWithRouterProp
  ): any {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    return (
      <Component
        {...props}
        router={{
          params,
          location,
          navigate
        }}
      />
    )
  }

  return ComponentWithRouterProp
}