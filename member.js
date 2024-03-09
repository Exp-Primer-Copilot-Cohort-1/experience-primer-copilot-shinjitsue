function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/members/member.html',
        scope: {
            member: '='
        },
        controller: function($scope, $element, $attrs) {
            $scope.skills = $scope.member.skills;
        }
    }
}