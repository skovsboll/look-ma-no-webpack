module Main exposing (..)

import Browser
import Html
import Html.Events


type alias Model =
    Int


type Msg
    = Increment


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1


view : Model -> Html.Html Msg
view model =
    Html.div []
        [ Html.text (String.fromInt model)
        , Html.button [ Html.Events.onClick Increment ] [ Html.text "Inc" ]
        ]


init : Model
init =
    0
