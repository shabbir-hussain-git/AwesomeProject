import { useNavigation, useRoute } from '@react-navigation/native';
import RecipeDetail from '../components/RecipeDetail'

const RecipeScreen = ()=>{

    let navigator = useNavigation()
    const route = useRoute();

    return (
        <>
            <RecipeDetail params={route.params}></RecipeDetail>
        </>
    )

}

export default RecipeScreen;